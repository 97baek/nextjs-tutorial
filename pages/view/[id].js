import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

const Post = () => {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
