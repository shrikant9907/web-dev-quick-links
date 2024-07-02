import React from 'react'; 
import PackageCard from '../components/PackageCard';

const PackageList = ({ packages }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Top NPM Packages</h1>
      <div className="grid grid-cols-1 gap-4">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.package.name}
            packageName={pkg.package.name}
            popularity={pkg.package.version.downloads}
            description={pkg.package.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
