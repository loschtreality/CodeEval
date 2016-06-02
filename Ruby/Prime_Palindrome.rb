# Write a program which determines the largest prime palindrome less than 1000.

def palin
  999.downto(0) do |x|
    pal = x.to_s.split('').reverse.join('')
    not_prime = true
    is_palindrome = false

    is_palindrome = true if pal == x.to_s

    j = Math.sqrt(x).floor

    (2..j).each do |i|
      not_prime = false if x % i == 0
    end
    return x if is_palindrome && not_prime
  end
end
