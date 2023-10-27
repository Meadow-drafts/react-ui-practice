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
         <section class="bg-gray-600 body-font">
        <div class="container px-5 pt-24 mx-auto">
            <div className="flex justify-between pb-16"> 
                <div>
                    <h1 className="font-semibold text-3xl text-black">Best Real Estate Deals</h1>
                    <p className="text-gray-600">Colonel gravity get thought fat smiling add but. Wonder twenty<br/> hunted and put income set desire expect.</p>
                </div>
                <button className="bg-red-500 rounded text-white px-2 h-12 text-sm">
                    View All Property
                </button>
            </div>

            <Tabs position="relative" variant="line" colorScheme="red">
          <TabList>
            <Tab>Residential Property</Tab>
            <Tab>Commercial Property</Tab>
            <Tab>Agriculture Property</Tab>
            <Tab>Industrial Property</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(8, 1fr)" gap={2}>
                <VStack>
                <img alt="gallery" class="p-10 w-full h-1/2 " src="https://plus.unsplash.com/premium_photo-1675122317466-981be65f700f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </VStack>

                <VStack>
                <img alt="gallery" class="p-10 inset-0 w-full h-1/2 " src="https://images.unsplash.com/photo-1565480401286-ea5dceac02a8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </VStack>

                <VStack>
                <img alt="gallery" class="p-10 inset-0 w-full h-1/2" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </VStack>
              </Grid>
            </TabPanel>

            <TabPanel className="flex - justify-center">
              <div >
              <img alt="gallery" class="p-10 inset-0 w-full h-1/2" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

              </div>
              <div className="h-1/2 ">
              <img alt="gallery" class="p-10 inset-0 w-full h-full" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

              </div>
              <div>
              <img alt="gallery" class="p-10 inset-0 w-full h-1/2" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

              </div>

             </TabPanel>
            <TabPanel>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap justify-center -m-4">
      <div class="p-4 md:w-1/4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
         
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
        
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1565953536805-beb35e81d3c3?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
         
        </div>
      </div>
    </div>
  </div>
</section>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </div>
      </section>
        </>
    )
  }


