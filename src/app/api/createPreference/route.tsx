// src/app/api/createPreference/route.ts

import { MercadoPagoConfig } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST() {
  try {
    //@ts-ignore
    const preference = await client.preferences.create({
      body: {
        items: [
          {
            title: 'Produto Exemplo',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 49.90,
          },
        ],
      },
    });

    return NextResponse.json({ id: preference.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    return NextResponse.json({ error: 'Erro ao criar preferência' }, { status: 500 });
  }
}
