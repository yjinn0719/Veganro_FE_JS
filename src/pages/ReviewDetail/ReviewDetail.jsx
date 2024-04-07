import Navbar from '@/components/Navbar/Navbar';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {
  ReviewContainer,
  Content,
} from '@/pages/ReviewDetail/ReviewDetail.styles';
import { useState } from 'react';
export default function ReviewDetail() {
  const dummyData = [
    {
      nickname: 'John Doe',
      veganLevel: 'Vegetarian',
      comment: 'Great place, loved the food!',
      date: '2021-09-01',
    },
    {
      nickname: 'Jane Smith',
      veganLevel: 'Vegan',
      comment: 'The vegan options here are amazing!',
      date: '2021-09-05',
    },
    {
      nickname: 'Jane Smith',
      veganLevel: 'Vegan',
      comment: 'The vegan options here are amazing!',
      date: '2021-09-05',
    },
    {
      nickname: 'Bob Martin',
      veganLevel: 'Vegan',
      comment: 'I love the variety of vegan options here!',
      date: '2021-09-06',
    },
    {
      nickname: 'Alice Johnson',
      veganLevel: 'Vegetarian',
      comment: 'The vegetarian dishes are so tasty!',
      date: '2021-09-07',
    },
    {
      nickname: 'Charlie Brown',
      veganLevel: 'Vegan',
      comment: 'The vegan desserts are to die for!',
      date: '2021-09-08',
    },
    {
      nickname: 'Diana Prince',
      veganLevel: 'Vegetarian',
      comment: 'The vegetarian pizza is the best!',
      date: '2021-09-09',
    },
    {
      nickname: 'Ethan Hunt',
      veganLevel: 'Vegan',
      comment: 'The vegan sushi is amazing!',
      date: '2021-09-10',
    },
    {
      nickname: 'Fiona Apple',
      veganLevel: 'Vegetarian',
      comment: 'The vegetarian pasta is delicious!',
      date: '2021-09-11',
    },
    {
      nickname: 'George Clooney',
      veganLevel: 'Vegan',
      comment: 'The vegan burgers are fantastic!',
      date: '2021-09-12',
    },
    {
      nickname: 'Helen Mirren',
      veganLevel: 'Vegetarian',
      comment: 'The vegetarian salad is so fresh!',
      date: '2021-09-13',
    },
    {
      nickname: 'Ian McKellen',
      veganLevel: 'Vegan',
      comment: 'The vegan smoothies are so refreshing!',
      date: '2021-09-14',
    },
    {
      nickname: 'Julia Roberts',
      veganLevel: 'Vegetarian',
      comment: 'The vegetarian soup is so comforting!',
      date: '2021-09-15',
    },
  ];
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const toggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
  };

  return (
    <>
      <Navbar title="리뷰" icon="null" />

      <ReviewContainer>
        <Content>
          {dummyData.map((item, index) => (
            <ReviewCard
              key={index}
              nickname={item.nickname}
              veganLevel={item.veganLevel}
              comment={item.comment}
              date={item.date}
              click={toggleEditDrawer}
            />
          ))}
        </Content>
      </ReviewContainer>
    </>
  );
}
