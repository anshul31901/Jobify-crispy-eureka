import ChartsContainer from '@/components/ChartComponents';
import StatsContainer from '@/components/StatsComponents';
import { getChartsDataAction, getStatsAction } from '@/utlis/actions';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

async function StatsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['stats'],
    queryFn: () => getStatsAction(),
  });
  await queryClient.prefetchQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StatsContainer />
      <ChartsContainer />
    </HydrationBoundary>
  );
}
export default StatsPage;