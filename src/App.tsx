import PageRouter from './PageRouter';
import StandardLayout from './pages/StandardLayout';
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { answersHeadlessConfig } from './config/answersHeadlessConfig';
import { routeConfig } from './config/routeConfig';

export default function App() {
  return (
    <AnswersHeadlessProvider {...answersHeadlessConfig}>
      <div className='flex justify-center px-8 py-6'>
        <div className='w-full max-w-5xl'>
          <PageRouter
            Layout={StandardLayout}
            routes={routeConfig}
          />
        </div>
      </div>
    </AnswersHeadlessProvider>
  );
}
