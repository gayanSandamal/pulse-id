import { ThemeColors } from '@/types/components';
import { Header } from './components/molecules/Header';
import './globals.css';
import { Providers } from './providers'; // adjust the path as needed
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={poppins.className}>
      <body style={{ backgroundColor: ThemeColors.Background }}>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
