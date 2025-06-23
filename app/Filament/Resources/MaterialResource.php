<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MaterialResource\Pages;
use App\Filament\Resources\MaterialResource\RelationManagers;
use App\Models\Material;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Http\UploadedFile;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class MaterialResource extends Resource
{
    protected static ?string $model = Material::class;

    protected static ?string $navigationGroup = 'Kelola Halaman';

    protected static ?string $pluralLabel = 'Materi';

    protected static ?string $navigationLabel = 'Materi';

    protected static ?string $navigationIcon = 'heroicon-o-book-open';

     public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->label('Judul'),
                        RichEditor::make('description')
                            ->required()
                            ->label('Deskripsi'),
                        FileUpload::make('img')
                            ->label('Gambar')
                            ->image()
                            ->required()
                            // Tentukan direktori tempat Filament akan menyimpan file
                            ->directory('uploads/thumbnail') 
                            // Gunakan visibility 'public' agar bisa diakses dari web
                            ->visibility('public')
                            // Ubah nama file sebelum disimpan
                            ->getUploadedFileNameForStorageUsing(
                                fn (UploadedFile $file): string => (string) str()->uuid() . '.' . $file->getClientOriginalExtension()
                            )
                            // Anda bisa menambahkan image editor untuk resize bawaan Filament
                            ->imageEditor()
                            ->imageEditorAspectRatios([
                                '16:9',
                                '4:3',
                                '1:1',
                            ])
                            ->maxSize(1028),
                    ]),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable(),

                ImageColumn::make('img')
                    ->label('Gambar')
                    ->disk('public'),
            ])
            ->filters([
                //
            ])
            ->actions([
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
            'index' => Pages\ListMaterials::route('/'),
            'create' => Pages\CreateMaterial::route('/create'),
            'edit' => Pages\EditMaterial::route('/{record}/edit'),
        ];
    }
}
