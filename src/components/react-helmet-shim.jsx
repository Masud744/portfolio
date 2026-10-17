import React, { useEffect } from 'react';

export function Helmet({ children }) {
  useEffect(() => {
    if (!children) return;
    React.Children.forEach(children, (child) => {
      if (!child) return;
      if (child.type === 'title') {
        const titleText = typeof child.props.children === 'string' 
          ? child.props.children 
          : Array.isArray(child.props.children) 
          ? child.props.children.join('') 
          : '';
        if (titleText) document.title = titleText;
      }
    });
  }, [children]);

  return null;
}

export default { Helmet };
