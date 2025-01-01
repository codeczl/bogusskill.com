'use client';

import React, { useState } from 'react';
import {
    BookmarkIcon,
    DotsHorizontalIcon,
    ReaderIcon
} from "@radix-ui/react-icons"
import { SearchIcon } from 'lucide-react';
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

export function Search({ className }: { className?: string }) {
    const [search, setSearch] = useState('');
    const t = useTranslations('search');

    return (
        <div className={cn("w-full max-w-lg", className)}>
            <Command className="rounded-lg border shadow-md">
                <CommandInput 
                    value={search}
                    onValueChange={setSearch}
                    placeholder={t('placeholder')} 
                />
                <CommandList>
                    <CommandGroup heading={t('heading')}>
                        <CommandItem onSelect={() => window.location.href = '/category/manga'}>
                            <BookmarkIcon className="mr-2 h-4 w-4" />
                            <span>Manga</span>
                        </CommandItem>
                        <CommandItem onSelect={() => window.location.href = '/category/novel'}>
                            <ReaderIcon className="mr-2 h-4 w-4" />
                            <span>Novel</span>
                        </CommandItem>
                        <CommandItem disabled>
                            <DotsHorizontalIcon className="mr-2 h-4 w-4" />
                            <span>{t('more')}</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
            {search &&
                <Button variant="outline" className='mt-6' onClick={() => window.location.href = `/tools/${encodeURIComponent(search)}`}>
                    <SearchIcon size={16} className='mr-2 opacity-80' />{t('button')}
                </Button>}
        </div>
    )
}
