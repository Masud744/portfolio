import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'groq-local-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res, next) => {
            if (req.method !== 'POST') return next()

            let body = ''
            req.on('data', chunk => {
              body += chunk
            })

            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body || '{}')
                const key = env.GROQ_API_KEY || process.env.GROQ_API_KEY

                if (!key) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  return res.end(
                    JSON.stringify({
                      error: 'GROQ_API_KEY not found in .env.local',
                    })
                  )
                }

                const systemPrompt = `You are "Strobi", Shahriar Alom Masud's cyber mascot and personal AI assistant on his engineering portfolio website.
Shahriar Alom Masud is an Embedded Systems & Edge AI Engineer based in Dhaka, Bangladesh.
Key facts about Masud:
- Education: Undergraduate in IoT & Robotics Engineering at University of Frontier Technology, Bangladesh (UFTB, 2023–2027).
- Flagship Achievement: Official Arduino Library Manager Package Author for SmartProv (v2.1.3) (https://github.com/Masud744/SmartProv).
- Core Stack: Bare-metal C/C++, FreeRTOS, ESP32, LoRa (SX1278), MQTT, YOLOv8, MediaPipe, OpenCV, ONNX Runtime, TinyML.
- Projects:
  1. SmartProv v2.1.3 (Zero-reflash Wi-Fi/MQTT credential provisioning library for ESP32).
  2. LoRa Emergency Mesh & Disaster Telemetry (Battery-operated field nodes).
  3. Real-time Eye & Gaze Tracker (MediaPipe 468 landmark pipeline).
  4. ESP32 GitHub OTA with SHA-256 validation & dual partition fallback.
- Contact: Email (shahriar0002@std.uftb.ac.bd), LinkedIn (shahriar-alom-masud), GitHub (Masud744), WhatsApp (+8801740071118).
- Resume: Available for download on the site.

Guidelines:
- Keep answers concise, helpful, and energetic (2-4 sentences max).
- Match the user's language: if they ask in Bengali or Banglish, answer in clear, friendly Bengali/Banglish. If English, answer in English.
- Highlight Masud's engineering depth and availability for internships, roles, and collaborations.`

                const groqRes = await fetch(
                  'https://api.groq.com/openai/v1/chat/completions',
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${key}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      model: 'qwen/qwen3.8-27b',
                      messages: [
                        { role: 'system', content: systemPrompt },
                        ...(messages || []),
                      ],
                      temperature: 0.6,
                      max_tokens: 300,
                    }),
                  }
                )

                const data = await groqRes.json()
                res.setHeader('Content-Type', 'application/json')
                if (!groqRes.ok) {
                  res.statusCode = 500
                  return res.end(
                    JSON.stringify({ error: data.error?.message || 'Groq error' })
                  )
                }

                const reply =
                  data.choices?.[0]?.message?.content || 'No response.'
                res.statusCode = 200
                res.end(JSON.stringify({ reply }))
              } catch (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
  }
})
