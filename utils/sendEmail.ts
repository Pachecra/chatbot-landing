export function sendEmail(subject: string, body: string) {
  const mailto = `mailto:service.pachecoai@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Versuch mailto
  window.location.href = mailto;

  // Fallback: Gmail öffnen, wenn mailto blockiert wird
  setTimeout(() => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=service.pachecoai@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }, 500);
}
