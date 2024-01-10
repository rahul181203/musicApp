import { Box, Button,Flex, Grid, ScrollArea } from "@radix-ui/themes"

const categories:Array<String> = ["Work out","Feel good","Podcasts","Romance","Party","Energise","Relax","Commute","Sad","Focus","Sleep"]

export const MainCategories=()=>{
    return (
        <>
            {
                categories.map((e,i)=>{
                    return <Button key={i} size={'2'} m={'2'} variant={'solid'} className=" bg-sand11 text-sand3">
                        {e}
                    </Button>
                })
            }
        </>
    )
}

export const MobileCategories=()=>{
    return (
        <>
            <ScrollArea>
                <Grid rows={'2'} flow={'column'} className=" whitespace-nowrap">
                {
                    categories.map((e,i)=>{
                        return <Button key={i} size={'2'} m={'2'} variant={'solid'} className=" bg-sand11 text-sand1 font-semibold">
                            {e}
                        </Button>
                    })
                }
                </Grid>
            </ScrollArea>
        </>
    )
}