<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InformationResource\Pages;
use App\Filament\Resources\InformationResource\RelationManagers;
use App\Models\Information;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class InformationResource extends Resource
{
    protected static ?string $model = Information::class;

    protected static ?string $navigationGroup = 'Kelola Halaman';

    protected static ?string $pluralLabel = 'Informasi Umum';

    protected static ?string $navigationLabel = 'Informasi Umum';

    protected static ?string $navigationIcon = 'heroicon-o-information-circle';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                ->schema([
                    TextInput::make('title')
                        ->label('Judul')
                        ->required(),
                    Textarea::make('description')
                        ->label('Deskripsi')
                        ->required(),
                    FileUpload::make('image')
                        ->label('Gambar')
                        ->directory('uploads/thumbnail')
                        ->image(),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable(),
                TextColumn::make('description')
                    ->label('Deskripsi')
                    ->searchable(),
                TextColumn::make('created_at')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
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
            'index' => Pages\ListInformation::route('/'),
            'create' => Pages\CreateInformation::route('/create'),
            'edit' => Pages\EditInformation::route('/{record}/edit'),
        ];
    }
}
