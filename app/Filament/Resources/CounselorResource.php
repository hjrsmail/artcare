<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CounselorResource\Pages;
use App\Filament\Resources\CounselorResource\RelationManagers;
use App\Models\Counselor;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CounselorResource extends Resource
{
    protected static ?string $model = Counselor::class;

        protected static ?string $navigationGroup = 'Kelola Halaman';

    protected static ?string $pluralLabel = 'Data Konselor';

    protected static ?string $navigationLabel = 'Data Konselor';

    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                ->schema([
                    TextInput::make('name')
                    ->required()
                    ->label('Nama Lengkap'),
                FileUpload::make('img')
                    ->required()
                    ->label('Foto')
                    ->image()
                    ->directory('uploads/counselors'),
                TextInput::make('no_whatsapp')
                    ->required()
                    ->label('Nomor Telepon'),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nama Lengkap')
                    ->searchable(),
                TextColumn::make('no_whatsapp')
                    ->label('Nomor Telepon')
                    ->searchable(),
                ImageColumn::make('img')
                    ->label('Foto')
                    ->disk('public'),
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
            'index' => Pages\ListCounselors::route('/'),
            'create' => Pages\CreateCounselor::route('/create'),
            'edit' => Pages\EditCounselor::route('/{record}/edit'),
        ];
    }
}
