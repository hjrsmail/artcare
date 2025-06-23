<?php

namespace App\Filament\Resources\FormResultResource\Pages;

use App\Filament\Resources\FormResultResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListFormResults extends ListRecords
{
    protected static string $resource = FormResultResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
