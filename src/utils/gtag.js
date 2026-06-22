// src/utils/gtag.js
// Helper para disparar conversiones de Google Ads.

// Etiqueta de evento "Contacto" (click a WhatsApp)
export const CONVERSION_CONTACTO = 'AW-18242490594/0Kr8CMnU3cMcEOKh2fpD'

/**
 * Dispara una conversión de Google Ads.
 * @param {string} sendTo - valor send_to (AW-XXXX/etiqueta)
 * @param {Function} [callback] - opcional, se ejecuta tras registrar el evento
 */
export const trackConversion = (sendTo, callback) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    if (callback) callback()
    return
  }
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    event_callback: callback,
  })
}

/** Atajo para la conversión de contacto por WhatsApp. */
export const trackContacto = (callback) =>
  trackConversion(CONVERSION_CONTACTO, callback)
