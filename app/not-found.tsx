'use client';

import Link from 'next/link';
import { IconChevronLeft } from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white text-gray-800">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl mt-4">Page Not Found</p>
                <Link
                    href="/"
                    className="mt-6 flex items-center text-blue-600 hover:underline"
                >
                    <IconChevronLeft className="w-5 h-5 mr-2" />
                    Go Back Home
                </Link>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
