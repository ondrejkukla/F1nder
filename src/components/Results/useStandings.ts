import { useState, useEffect } from 'react';
import { DriverStanding, ConstructorStanding } from './types';

const useStandings = () => {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [constructorStandings, setConstructorStandings] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setDriverStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      } catch (err) {
        console.error('Error fetching driver standings:', err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      }
    };

    const fetchConstructorStandings = async () => {
      try {
        const response = await fetch('https://ergast.com/api/f1/current/constructorStandings.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setConstructorStandings(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.sort(
          (a: ConstructorStanding, b: ConstructorStanding) => parseInt(b.points) - parseInt(a.points)
        ));
      } catch (err) {
        console.error('Error fetching constructor standings:', err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      }
    };

    const fetchData = async () => {
      await fetchDriverStandings();
      await fetchConstructorStandings();
      setLoading(false);
    };

    fetchData();
  }, []);

  return { driverStandings, constructorStandings, loading, error };
};

export default useStandings;
