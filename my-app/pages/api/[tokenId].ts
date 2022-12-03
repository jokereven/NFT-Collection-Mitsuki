import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string,
  description: string,
  image: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // As all the images are uploaded on github, we can extract the images from github directly.
  const image_url =
    "https://raw.githubusercontent.com/jokereven/NFT-Collection-Mitsuki/main/my-app/public/cryptodevs/";
  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: "MITSUKI TOKYO #" + tokenId,
    description: "渋谷の道玄坂を登りきった辺りにある 黒い重苦しいドアを開けると地下に通ずる黒い階段 目の前には月下美人の花 暗い廊下の先にオレンジに光る月が客を迎え入れる 一年 ...",
    image: image_url + tokenId + ".svg",
  });
};
