<?php

namespace App\Filament\Resources\FormResultResource\Pages;

use App\Filament\Resources\FormResultResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFormResult extends EditRecord
{
    protected static string $resource = FormResultResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
