<?php

namespace App\Actions\Api;

use GuzzleHttp\Client;

class LocaleAction
{
    public function __invoke($address, $number)
    {
        $client = new Client();

        $rua = $address['logradouro'];

        $bairro = $address['bairro'];
        $cidade = $address['localidade'];
        $estado = $address['estado'];
        $cep = $address['cep'];

        $response = $client->get('https://maps.googleapis.com/maps/api/geocode/json', [
            'query' => [
                'address' => "{$rua} {$number}, {$bairro}, {$cidade}, {$estado}, {$cep}",
                'key' => 'AIzaSyDB4Z02pk4O1AxJX2d5kEkdotedSF14-hQ'
            ],
            'headers' => [
                'Content-Type' => 'application/json',
                'User-Agent' => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
            ]
        ]);

        $data = json_decode($response->getBody(), true);

        // Extraindo latitude e longitude se disponível
        $location = $data['results'][0]['geometry']['location'] ?? null;
        $lat = $location['lat'] ?? null;
        $lng = $location['lng'] ?? null;

        return compact('lat', 'lng');
    }
}
