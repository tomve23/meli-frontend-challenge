import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import LogoMeli from '@/assets/images/LogoMeli.png';
import SearchIcon from '@/assets/icons/Search.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const search = searchParams.get('search')?.trim();

    if (search) {
      setSearchValue(search);
    }
  }, [searchParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate search input
    const search = searchValue.trim();

    if (search) {
      navigate(`/items?search=${search}`);
    }
  };

  return (
    <header className="grid grid-cols-12 gap-4 bg-primary">
      <div className="flex items-center col-span-10 col-start-2 py-2 gap-6">
        <Link to="/">
          <img src={LogoMeli} alt="logo" />
        </Link>
        <form className="flex items-center w-full" onSubmit={handleSubmit}>
          <Input
            id="search"
            name="search"
            placeholder="Nunca dejes de buscar"
            className="rounded-e-none border-none shadow-none"
            value={searchValue}
            onChange={handleInputChange}
          />
          <Button
            size="lg"
            className="rounded-s-none p-3 duration-200 bg-background hover:bg-background-hover border-none shadow-none"
          >
            <img src={SearchIcon} alt="search" />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
