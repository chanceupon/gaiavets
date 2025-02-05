import axios from 'axios';

export const fetchGuides = async ({ page, pageSize }) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
    {
      query: `
        query getGuides {
          guides(pagination: { page: ${page}, pageSize: ${pageSize} }, publicationState: LIVE, sort: ["type:desc","date:desc"]) {
            data {
              id
              attributes {
                slug
                date
                title
                subTitle
                content
                shortDescription
                createdAt
                updatedAt
                publishedAt
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                readTime
                type
              }
            }
            meta {
              pagination {
                total
                page
                pageSize
                pageCount
              }
            }
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      },
    }
  );

  return response.data.data.guides;
};

export const fetchContact = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
    {
      query: `
        query getContact {
          contact(publicationState:LIVE){
            data{
              id,
              attributes{
                data
              }
            }
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      },
    }
  );

  return response.data.data.contact;
};

export const fetchFooter = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CMS_GRAPHQL}`,
    {
      query: `
        query getFooter {
          footer(publicationState:LIVE){
            data{
              id,
              attributes{
                data,
                logo {
                  data{
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`,
      },
    }
  );

  return response.data.data.footer;
};
