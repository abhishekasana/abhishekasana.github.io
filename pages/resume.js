import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // Redirect to the API route on page load
    window.location.href = '/static/resources/kasana_resume_25_oy.pdf';
  }, []);

  return null;
}
