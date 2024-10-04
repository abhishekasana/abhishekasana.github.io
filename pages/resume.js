import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // Redirect to the API route on page load
    window.location.href = '/api/resume';
  }, []);

  return null;
}
