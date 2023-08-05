<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactsSeeder extends Seeder
{
    public function run()
    {
        // You can seed multiple contacts here
        $contacts = [
            [
                'name' => 'John Doe',
                'phone' => '1234567890',
                'latitude' => 40.7128,
                'longitude' => -74.0060,
            ],
            [
                'name' => 'Jane Smith',
                'phone' => '9876543210',
                'latitude' => 34.0522,
                'longitude' => -118.2437,
            ],
            [
                'name' => 'Alice Johnson',
                'phone' => '5555555555',
                'latitude' => 51.5074,
                'longitude' => -0.1278,
            ],
            [
                'name' => 'Bob Williams',
                'phone' => '1111111111',
                'latitude' => 48.8566,
                'longitude' => 2.3522,
            ],

        ];

        Contact::insert($contacts);
    }
}
