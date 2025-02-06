import { createClient } from 'next-sanity'



export const client = createClient({
  projectId:"9jiaxwbi",
  dataset:"production",
  apiVersion:'2025-02-03',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"sk9sjHiWIAOkazp3Lov9JI9xbS0NscrNcqWWsYKSboJdHQFTjet4lCCmEhdJcsbeneFQlWGpSiJEkYZb5MfOcdjg3giV2iunbwFwoe6FUsuzR8rDJIZqPKZoNx2ZRHbuZdYGXIfXDrpAoVqst3DvXtHTZwDXuFSw30HG9MvArFMFuC64uQtQ"
})
