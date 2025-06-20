<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommentResource\Pages;
use App\Filament\Resources\CommentResource\RelationManagers;
use App\Models\Comment;
use Filament\Tables\Actions\Action;
use Filament\Forms;
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

class CommentResource extends Resource
{
    protected static ?string $model = Comment::class;

    protected static ?string $navigationGroup = 'Komentar Siswa';

    protected static ?string $pluralLabel = 'Komentar';

    protected static ?string $navigationLabel = 'Komentar';

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(1)
                    ->schema([
                        TextInput::make('username')
                            ->label('Username')
                            ->required(),
                        TextInput::make('school_origin')
                            ->label('Asal Sekolah'),
                        Textarea::make('comment')
                            ->label('Komentar')
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
            ])
            ->filters([
                //
            ])
            ->actions([
                Action::make('show')
                ->label('Tampilkan')
                ->color('success')
                ->visible(fn ($record) => $record->status==='hide')
                ->action(function ($record) {
                    $record->status = 'show';
                    $record->save();
                }),
                Action::make('hide')
                ->label('Sembunyikan')
                ->color('warning')
                ->visible(fn ($record) => $record->status==='show')
                ->action(function ($record) {
                    $record->status = 'hide';
                    $record->save();
                }),
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make()
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
            'index' => Pages\ListComments::route('/'),
            'create' => Pages\CreateComment::route('/create'),
            'edit' => Pages\EditComment::route('/{record}/edit'),
        ];
    }
}
