import React from 'react';

const WhatsAppButton = () => {
  const message =
    'જય સ્વામિનારાયણ, હું માનવતા ધર્મ સેવા ચેરિટેબલ ટ્રસ્ટને સેવા / દાન અંગે માહિતી મેળવવા ઈચ્છું છું.';

  const whatsappUrl = `https://wa.me/919712537806?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp દ્વારા સંપર્ક કરો"
    >
      <span className="whatsapp-icon">💬</span>
    </a>
  );
};

export default WhatsAppButton;




