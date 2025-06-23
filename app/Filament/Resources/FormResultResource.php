<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FormResultResource\Pages;
use App\Filament\Resources\FormResultResource\RelationManagers;
use App\Models\FormResult;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Storage;

class FormResultResource extends Resource
{
    protected static ?string $model = FormResult::class;

    protected static ?string $navigationGroup = 'Hasil Form';

    protected static ?string $navigationLabel = 'Assesment Siswa';

    protected static ?string $navigationIcon = 'heroicon-o-document-text';



    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)->schema([
                TextInput::make('name')
                    ->label('Nama Hasil Form')
                    ->required(),
                    
                    TextInput::make('link')
                    ->label('Tautan')
                    ->required(),
                ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Nama'),
            ])
            
            ->filters([
                //
            ])
            ->actions([
                Action::make('lihat')
                    ->label('Lihat Hasil')
                    ->url(fn ($record) => $record->link)
                    ->openUrlInNewTab()
                    ->color('gray') 
                    ->icon('heroicon-o-arrow-top-right-on-square')
                    ->button() 
                    ->extraAttributes([
                        'class' => 'hover:scale-105 transition-transform duration-300',
                    ]),

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])

            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFormResults::route('/'),
            'create' => Pages\CreateFormResult::route('/create'),
            'edit' => Pages\EditFormResult::route('/{record}/edit'),
        ];
    }
}
