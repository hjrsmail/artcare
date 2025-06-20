<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ActivityResource\Pages;
use App\Filament\Resources\ActivityResource\RelationManagers;
use App\Models\Activity;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ActivityResource extends Resource
{
    protected static ?string $model = Activity::class;

        protected static ?string $navigationGroup = 'Kelola Halaman';

    protected static ?string $pluralLabel = 'Aktivitas';

    protected static ?string $navigationLabel = 'Aktivitas';

    protected static ?string $navigationIcon = 'heroicon-o-pencil-square';

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
                        ->image()
                        ->required(),
                    TextInput::make('link')
                        ->label('Link')
                        ->required(),
                    TextInput::make('text_button')
                        ->label('Teks Tombol')
                        ->required(),
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
                ImageColumn::make('image')
                    ->label('Gambar')
                    ->disk('public'),
                TextColumn::make('link')
                    ->label('Link'),
                TextColumn::make('text_button')
                    ->label('Teks Tombol'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListActivities::route('/'),
            'create' => Pages\CreateActivity::route('/create'),
            'edit' => Pages\EditActivity::route('/{record}/edit'),
        ];
    }
}
