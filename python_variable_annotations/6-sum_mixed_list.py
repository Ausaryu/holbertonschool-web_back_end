#!/usr/bin/env python3
import typing

def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    result = 0
    for num in mxd_lst:
        result += num
    return float(result)
