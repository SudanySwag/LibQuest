import React from 'react';
import VisitedLibrariesScreen from '../components/profile/VisitedLibrariesScreen';
import PlannedLibrariesScreen from '../components/profile/PlannedLibrariesScreen';
import TrophiesScreen from '../components/profile/TrophiesScreen';
export default function Profile() {
  return (
    <>
      <VisitedLibrariesScreen/>
      <PlannedLibrariesScreen/>
      <TrophiesScreen/>
    </>
  );
};

