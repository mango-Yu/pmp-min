"use strict";
Component({
    data: {
        treeList: {
            text: '第一单元',
            id: 0,
            nodes: [
                {
                    text: '理财入门之基本经济指标与经济学原理',
                    id: 1,
                    nodes: [
                        {
                            text: '正确理解理财之理财就是理生活',
                            id: 2,
                            nodes: [
                                {
                                    text: '现金规划管理（上）',
                                    id: 3,
                                },
                                {
                                    text: '现金规划管理 （下）',
                                    id: 4,
                                },
                            ]
                        },
                        {
                            text: 'Child 2',
                            id: 5,
                        }
                    ]
                },
                {
                    text: 'Parent 2',
                    id: 6,
                    nodes: [
                        {
                            text: 'Child 1',
                            id: 7,
                        },
                        {
                            text: 'Child 2',
                            id: 8,
                        }
                    ]
                }
            ]
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNGLFFBQVEsRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUU7Z0JBQ0g7b0JBQ0ksSUFBSSxFQUFFLG1CQUFtQjtvQkFDekIsRUFBRSxFQUFFLENBQUM7b0JBQ0wsS0FBSyxFQUFFO3dCQUNIOzRCQUNJLElBQUksRUFBRSxnQkFBZ0I7NEJBQ3RCLEVBQUUsRUFBRSxDQUFDOzRCQUNMLEtBQUssRUFBRTtnQ0FDSDtvQ0FDSSxJQUFJLEVBQUUsV0FBVztvQ0FDakIsRUFBRSxFQUFFLENBQUM7aUNBQ1I7Z0NBQ0Q7b0NBQ0ksSUFBSSxFQUFFLFlBQVk7b0NBQ2xCLEVBQUUsRUFBRSxDQUFDO2lDQUNSOzZCQUNKO3lCQUNKO3dCQUNEOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLEVBQUUsRUFBRSxDQUFDO3lCQUNSO3FCQUNKO2lCQUNKO2dCQUNEO29CQUNJLElBQUksRUFBRSxVQUFVO29CQUNoQixFQUFFLEVBQUUsQ0FBQztvQkFDTCxLQUFLLEVBQUU7d0JBQ0g7NEJBQ0ksSUFBSSxFQUFFLFNBQVM7NEJBQ2YsRUFBRSxFQUFFLENBQUM7eUJBQ1I7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFNBQVM7NEJBQ2YsRUFBRSxFQUFFLENBQUM7eUJBQ1I7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbkNvbXBvbmVudCh7XG4gICAgZGF0YToge1xuICAgICAgICB0cmVlTGlzdDoge1xuICAgICAgICAgICAgdGV4dDogJ+esrOS4gOWNleWFgycsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn55CG6LSi5YWl6Zeo5LmL5Z+65pys57uP5rWO5oyH5qCH5LiO57uP5rWO5a2m5Y6f55CGJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+ato+ehrueQhuino+eQhui0ouS5i+eQhui0ouWwseaYr+eQhueUn+a0uycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+eOsOmHkeinhOWIkueuoeeQhu+8iOS4iu+8iScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+eOsOmHkeinhOWIkueuoeeQhiDvvIjkuIvvvIknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BhcmVudCAyJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NoaWxkIDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hpbGQgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4iXX0=