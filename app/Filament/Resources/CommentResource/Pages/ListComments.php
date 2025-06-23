<?php

namespace App\Filament\Resources\CommentResource\Pages;

use App\Filament\Resources\CommentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Pages\ListRecords\Tab;
use Illuminate\Database\Eloquent\Builder;

class ListComments extends ListRecords
{
    protected static string $resource = CommentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
        
    }

    public function getTabs(): array
    {
        return [
            'Show' => Tab::make()->modifyQueryUsing(function (Builder $query) {
                return $query->where('status', 'show');
            }),
            'Hidden' => Tab::make()->modifyQueryUsing(function (Builder $query) {
                return $query->where('status', 'hide');
            }),
        ];
    }
}
