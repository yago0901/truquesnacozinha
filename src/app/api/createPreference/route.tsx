import { MercadoPagoConfig, Preference } from 'mercadopago';
import { NextResponse } from 'next/server';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST() {
  try {
    const preference = new Preference(client);
    
    const result = await preference.create({
      body: {
        items: [
          {
            id: '1234',
            title: 'Produto Exemplo',
            quantity: 1,
            currency_id: 'BRL',
            unit_price: 49.90,
          },
        ],
        // Additional optional parameters
        // back_urls: {
        //   success: 'https://yoursite.com/success',
        //   failure: 'https://yoursite.com/failure',
        //   pending: 'https://yoursite.com/pending'
        // },
        // auto_return: 'approved',
      },
    });

    return NextResponse.json({ id: result.id });
  } catch (error) {
    console.error('Erro ao criar preferência:', error);
    return NextResponse.json(
      { error: 'Erro ao criar preferência' }, 
      { status: 500 }
    );
  }
}