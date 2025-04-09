import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ErrorImage from '@/assets/images/Error.svg?react';

const Exception = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-9 rounded-sm h-full">
      <ErrorImage className="mb-4" />
      <h1 className="text-2xl text-text font-semibold mb-6">
        Hubo un error inesperado
      </h1>
      <Button asChild variant="ghost" size="lg">
        <Link to="/">Volver al Inicio</Link>
      </Button>
    </div>
  );
};

export default Exception;
