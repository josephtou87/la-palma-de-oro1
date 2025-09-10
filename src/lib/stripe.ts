import { loadStripe } from '@stripe/stripe-js'

// Reemplazar con tu clave pública de Stripe cuando estés listo para producción
export const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')