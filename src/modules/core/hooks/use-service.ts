import { useRef } from 'react';
import { container, InjectionToken } from 'tsyringe';

function useService<T>(injectableService: InjectionToken<T>) {
  const serviceRef = useRef(container.resolve(injectableService));

  return serviceRef.current;
}

export { useService };
