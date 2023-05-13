import { AppRouter } from './router/AppRouter';
import { ThemeApp } from './theme/ThemeApp';

export const JournalApp = () => {
  return (
      <ThemeApp>
        <AppRouter/>
      </ThemeApp>
  )
};
