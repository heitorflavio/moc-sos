<?php

namespace App\Actions\Api;

use GuzzleHttp\Client;

class CepAction
{
    public function __invoke($cep)
    {
        $client = new Client();

        $numeroCep = preg_replace('/[^0-9]/', '', $cep);

        $response = $client->get("https://viacep.com.br/ws/{$numeroCep}/json/", [
            'headers' => [
                'Access-Control-Allow-Origin' => '*'
            ]
        ]);

        $data = json_decode($response->getBody(), true);

        return $data;
    }

}
