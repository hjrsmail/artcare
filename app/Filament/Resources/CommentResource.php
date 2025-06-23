<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommentResource\Pages;
use App\Models\Comment;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CommentResource extends Resource
{
    protected static ?string $model = Comment::class;

    protected static ?string $navigationGroup = 'Komentar Siswa';
    protected static ?string $pluralLabel = 'Komentar';
    protected static ?string $navigationLabel = 'Komentar';
    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Grid::make(1)->schema([
                TextInput::make('username')
                    ->label('Username')
                    ->required(),

                TextInput::make('school_origin')
                    ->label('Asal Sekolah'),

                Textarea::make('comment')
                    ->label('Komentar')
                    ->required(),

                Select::make('status')
                    ->label('Status Tampilkan')
                    ->options([
                        'show' => 'Tampilkan di Halaman Depan',
                        'hide' => 'Sembunyikan',
                    ])
                    ->default('hide')
                    ->required(),
            ])
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('username')
                    ->label('Username')
                    ->searchable(),

                TextColumn::make('school_origin')
                    ->label('Asal Sekolah')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('comment')
                    ->label('Komentar')
                    ->searchable(),

                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => $state === 'show' ? 'success' : 'gray'),
            ])
            ->actions([
                Action::make('show')
                    ->label('Tampilkan')
                    ->color('success')
                    ->visible(fn ($record) => $record->status === 'hide')
                    ->action(fn ($record) => $record->update(['status' => 'show'])),

                Action::make('hide')
                    ->label('Sembunyikan')
                    ->color('warning')
                    ->visible(fn ($record) => $record->status === 'show')
                    ->action(fn ($record) => $record->update(['status' => 'hide'])),

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListComments::route('/'),
            'create' => Pages\CreateComment::route('/create'),
            'edit' => Pages\EditComment::route('/{record}/edit'),
        ];
    }
}
