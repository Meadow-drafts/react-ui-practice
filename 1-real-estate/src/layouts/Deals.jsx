import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabIndicator,
    TabPanel,
    Select,
    Grid,
    VStack,
    Text,
  } from "@chakra-ui/react";
  import { deal1, deal2, deal3 } from "../assets";
//   import { ChevronDownIcon } from "@chakra-ui/icons";


  export default function Deals(){
    return(
        <>
         <section class="body-font">
        <div class="container px-14 pt-24 mx-auto">
            <div className="flex justify-between pb-10"> 
                <div>
                    <h1 className="font-semibold text-3xl text-black">Best Real Estate Deals</h1>
                    <p className="text-gray-600">Colonel gravity get thought fat smiling add but. Wonder twenty<br/> hunted and put income set desire expect.</p>
                </div>
                <button className="bg-red-500 rounded text-white px-2 h-12 text-sm">
                    View All Property
                </button>
            </div>

            <div className="hidden sm:block">
            <Tabs position="relative" variant="line" colorScheme="red" >
          <TabList>
            <Tab>Residential Property</Tab>
            <Tab>Commercial Property</Tab>
            <Tab>Agriculture Property</Tab>
            <Tab>Industrial Property</Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="flex justify-center py-5 flex-wrap">
            <img class="h-52 w-1/5 mx-6 object-cover object-center" src="https://plus.unsplash.com/premium_photo-1675122317466-981be65f700f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center" src="https://plus.unsplash.com/premium_photo-1675122317466-981be65f700f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center mx-6" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            </TabPanel>

            <TabPanel className="flex justify-center py-5 flex-wrap">
            <img class="h-52 w-1/5 mx-6 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center mx-6" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            </TabPanel>
            <TabPanel className="flex justify-center py-5 flex-wrap">
            <img class="h-52 w-1/5 mx-6 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center mx-6" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            </TabPanel>
            <TabPanel>
            <TabPanel className="flex justify-center py-5 flex-wrap">
            <img class="h-52 w-1/5 mx-6 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            <img class="h-52 w-1/5 object-cover object-center mx-6" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
            </TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
            </div>
            
        </div>
      </section>
        </>
    )
  }


