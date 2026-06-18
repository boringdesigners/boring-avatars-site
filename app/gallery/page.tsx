import React from 'react'
import { Example } from '@/components/ui-system'
import {
  examples,
  nameProfile,
  nameInstagram,
  nameUpload,
  nameUploadLikes,
  dataList,
  dataTwitter,
  dataSuggested,
  dataShared
} from '@/components/ui/example-data'
import './styles.css'

export default function GalleryPage() {
  return (
    <div className="homeLayout">
      <aside className="homeSidebar">
        <div className="readmeMain">
          <h1>Fun ways to use boring avatars</h1>
          <p>
            Discover the possibilities of custom avatars with our open-source library. From social apps to games and
            SaaS platforms, it&apos;s easy to add a personal touch to any project.
          </p>
        </div>
      </aside>
      <div className="homePlayground">
        <div className="examples-container">
          {examples.map((example, index) => (
            <Example
              key={index}
              {...example}
              nameProfile={nameProfile}
              nameInstagram={nameInstagram}
              nameUpload={nameUpload}
              nameUploadLikes={nameUploadLikes}
              dataList={dataList}
              dataTwitter={dataTwitter}
              dataSuggested={dataSuggested}
              dataShared={dataShared}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
