import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

// Stock data representing different companies and their financial information
const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

// Function to format a number as currency
const dataFormatter = (number) => {
  return "£ " + Intl.NumberFormat("us").format(number).toString();
};

// React component for displaying sales-related information
const SalesItem = () => {
  // State to keep track of the selected tab index
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // Main card container
    <Card className="max-w-full mx-auto">
      {/* Flex container for title and tab group */}
      <Flex className="space-x-8 flex-col lg:flex-row">
        {/* Title component for the overview section */}
        <Title>Overview</Title>
        {/* Tab group for switching between chart and list views */}
        <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
          {/* Tab list with icons for chart and list views */}
          <TabList variant="solid">
            <Tab icon={ChartPieIcon}>Chart</Tab>
            <Tab icon={ViewListIcon}>List</Tab>
          </TabList>
        </TabGroup>
      </Flex>
      {/* Portfolio value section */}
      <Text className="mt-8">Portfolio Value</Text>
      <Metric>£ 25 465</Metric>
      {/* Divider to separate sections */}
      <Divider />
      {/* Asset allocation section */}
      <Text className="mt-8">
        <Bold>Asset Allocation</Bold>
      </Text>
      <Text>1 Asset class - 5 Holdings</Text>
      {/* Conditional rendering based on the selected tab */}
      {selectedIndex === 0 ? (
        // Render a donut chart for the chart view
        <DonutChart
          data={stocks}
          valueFormatter={dataFormatter}
          showAnimation={false}
          category="value"
          index="name"
          className="mt-6"
        />
      ) : (
        // Render a list view for the list tab
        <>
          {/* Flex container for stock list header */}
          <Flex className="mt-8" justifyContent="between">
            <Text className="truncate">
              <Bold>Stocks</Bold>
            </Text>
            <Text>Since transaction</Text>
          </Flex>
          {/* List component for displaying stock information */}
          <List className="mt-4">
            {stocks.map((stock) => (
              <ListItem key={stock.name}>
                {/* Individual stock name */}
                <Text>{stock.name}</Text>
                {/* Flex container for displaying stock value */}
                <Flex className="space-x-2" justifyContent="end">
                  <Text>
                    {/* Formatted stock value */}
                    £ {Intl.NumberFormat("us").format(stock.value).toString()}
                  </Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {/* Button for viewing more details */}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          icon={ArrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
};


export default SalesItem;
