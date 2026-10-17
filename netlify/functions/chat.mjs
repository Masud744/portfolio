export default async (req, _context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { messages } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GROQ_API_KEY is not configured on Netlify' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
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
- Highlight Masud's engineering depth and availability for internships, roles, and collaborations.`;

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [
          { role: 'system', content: systemPrompt },
          ...(messages || [])
        ],
        temperature: 0.6,
        max_tokens: 300
      })
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'Groq error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
