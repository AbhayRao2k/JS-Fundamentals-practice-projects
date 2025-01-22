// Step 1: Total calculations
const campaigns = [
  { name: "Campaign A", impressions: 5000, clicks: 400, budget: 1000 },
  { name: "Campaign B", impressions: 8000, clicks: 200, budget: 1500 },
  { name: "Campaign C", impressions: 2000, clicks: 300, budget: 800 },
  { name: "Campaign D", impressions: 10000, clicks: 700, budget: 2000 },
];

const totalImpressions = campaigns.reduce(
  (total, impression) => total + impression.impressions,
  0
);
const totalClicks = campaigns.reduce((total, click) => total + click.clicks, 0);
const totalBudget = campaigns.reduce((total, cost) => total + cost.budget, 0);

console.log(`Total impressions ${totalImpressions}`);
console.log(`Total clicks ${totalClicks}`);
console.log(`Total budget ${totalBudget}`);

// Step 2: Calculate CTR
const campaignsWithCTR = campaigns.map((campaign) => {
  const ctr = (campaign.clicks / campaign.impressions) * 100;
  return { ...campaign, ctr: ctr.toFixed(2) };
});

console.log(campaignsWithCTR);

// Step 3: Most Successful Campaign
const mostSuccessfulCampaign = campaignsWithCTR.reduce((most, highest) => {
  return most.ctr > highest.ctr ? highest : most;
});

console.log(
  `Most Successful Campaign is ${mostSuccessfulCampaign.name} with ${mostSuccessfulCampaign.ctr} CTR`
);

// Step 4: Grouping Campaigns by performance
const highCTR = campaignsWithCTR.filter((campaign) => campaign.ctr > 5);
const lowCTR = campaignsWithCTR.filter((campaign) => campaign.ctr <= 5);

console.table(highCTR);
console.table(lowCTR);

// Step 5: Display Report

