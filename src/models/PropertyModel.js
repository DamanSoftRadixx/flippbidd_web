/**
 * Property Model
 * 
 * Handles the data and business logic related to properties
 */
class PropertyModel {
  constructor() {
    this.properties = [];
    this.features = [
      { id: 1, title: 'Buyers and Sellers Communicate Direct', icon: 'blue_tick_ic.svg' },
      { id: 2, title: 'Property Lead Search', icon: 'blue_tick_ic.svg' },
      { id: 3, title: 'Wholesaler Tool (contract to close)', icon: 'blue_tick_ic.svg' },
      { id: 4, title: 'Property Data & Comps', icon: 'blue_tick_ic.svg' },
      { id: 5, title: 'Network & Top Lnrs Nationwide', icon: 'blue_tick_ic.svg' },
      { id: 6, title: 'Partner Membership and More...', icon: 'blue_tick_ic.svg' },
    ];
    
    this.polygonFeatures = [
      { id: 1, title: 'FREE Driving Search', icon: 'gradient_tick_ic.svg' },
      { id: 2, title: 'Market Analysis/Reports', icon: 'gradient_tick_ic.svg' },
      { id: 3, title: 'Property & Owner Contact', icon: 'gradient_tick_ic.svg' },
      { id: 4, title: 'Vacant Properties', icon: 'gradient_tick_ic.svg' },
      { id: 5, title: 'Tax Liens', icon: 'gradient_tick_ic.svg' },
      { id: 6, title: 'Cash Buyers', icon: 'gradient_tick_ic.svg' },
      { id: 7, title: 'Pre-Foreclosures', icon: 'gradient_tick_ic.svg' },
      { id: 8, title: 'Low Equity', icon: 'gradient_tick_ic.svg' },
    ];
  }

  // Get property features
  getFeatures() {
    return this.features;
  }

  // Get polygon search features
  getPolygonFeatures() {
    return this.polygonFeatures;
  }

  // Mock function to search properties by address
  searchByAddress(address) {
    return new Promise((resolve) => {
      // Simulate API call with timeout
      setTimeout(() => {
        resolve({
          success: true,
          message: `Found results for: ${address}`,
          data: []
        });
      }, 500);
    });
  }
}

// Singleton instance
const propertyModelInstance = new PropertyModel();
export default propertyModelInstance; 