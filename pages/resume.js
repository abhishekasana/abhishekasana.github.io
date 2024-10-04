import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // Redirect to the API route on page load
    window.location.href = '/static/resources/kasana_resume_sept_2024.pdf';
  }, []);

  return null;
}
