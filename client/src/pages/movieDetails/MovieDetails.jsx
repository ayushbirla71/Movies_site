import React from 'react'
import VideoHeader from '../../components/videoComp/VideoHeader'
import ListItemsCard from '../../components/listItemCard/ListItemsCard'
import ItemListComp from '../../components/ItemListComp/ItemListComp'
import DownloadComp from '../../components/downloadcomp/DownloadComp'

const MovieDetails = () => {
  return (
      <div>
          <VideoHeader />
          <div>
              <DownloadComp/>
          </div>
          <div>
              <ListItemsCard />
              <ItemListComp/>
          </div>
    </div>
  )
}

export default MovieDetails