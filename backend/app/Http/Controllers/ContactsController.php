<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Throwable;

class ContactsController extends Controller {

    function getAllContacts() {
        try {
            $contacts = Contact::all();

            $contactsArray = [];

            foreach ($contacts as $contact) {
                $contactsArray[] = [
                    'id' => $contact->id,
                    'name' => $contact->name,
                    'phone' => $contact->phone,
                    'latitude' => $contact->latitude,
                    'created_at' => $contact->created_at,
                    'updated_at' => $contact->updated_at,
                ];
            }

            return response()->json(['contacts' => $contactsArray]);
        } catch (Throwable $e) {
            return response()->json(['error' => 'An error occurred while fetching contacts.'], 500);
        }
    }

    function addContacts(Response $response) {

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);


        try {
            $contact = new Contact();
            $contact->name = $validatedData['name'];
            $contact->phone = $validatedData['phone'];
            $contact->latitude = $validatedData['latitude'];
            $contact->longitude = $validatedData['longitude'];
            $contact->save();

            return response()->json([
                'message' => 'Contact added successfully',
                'contact' => [
                    'id' => $contact->id,
                    'name' => $contact->name,
                    'phone' => $contact->phone,
                    'latitude' => $contact->latitude,
                    'longitude' => $contact->longitude,
                    'created_at' => $contact->created_at,
                    'updated_at' => $contact->updated_at,
                ],
            ]);
        } catch (Throwable $e) {
            return response()->json([
                'error' => 'An error occurred while adding the contact.',
            ], 500);
        }
    }

    function editContacts(Response $response, $id) {

        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['error' => 'Contact not found.'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        try {
            $contact->name = $validatedData['name'];
            $contact->phone = $validatedData['phone'];
            $contact->latitude = $validatedData['latitude'];
            $contact->longitude = $validatedData['longitude'];
            $contact->save();

            return response()->json(['message' => 'Contact updated successfully', 'contact' => $contact]);
        } catch (Throwable $e) {
            return response()->json(['error' => 'An error occurred while updating the contact.'], 500);
        }
    }

    function deleteContact($id) {

        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['error' => 'Contact not found.'], 404);
        }

        try {
            $contact->delete();

            return response()->json(['message' => 'Contact deleted successfully']);
        } catch (Throwable $e) {
            return response()->json(['error' => 'An error occurred while deleting the contact.'], 500);
        }
    }
}

